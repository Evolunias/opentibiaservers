import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-south-america');
}

export default function ThaisotLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-south-america" />;
}
