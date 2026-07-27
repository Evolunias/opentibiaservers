import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-south-america');
}

export default function ThaisotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-south-america" />;
}
