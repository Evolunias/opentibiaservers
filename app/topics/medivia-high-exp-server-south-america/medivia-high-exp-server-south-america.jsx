import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-south-america');
}

export default function MediviaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-south-america" />;
}
