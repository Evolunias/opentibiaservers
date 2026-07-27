import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-south-america');
}

export default function MediviaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-south-america" />;
}
