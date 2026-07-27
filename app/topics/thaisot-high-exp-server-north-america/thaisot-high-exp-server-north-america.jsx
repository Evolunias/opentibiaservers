import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-north-america');
}

export default function ThaisotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-north-america" />;
}
