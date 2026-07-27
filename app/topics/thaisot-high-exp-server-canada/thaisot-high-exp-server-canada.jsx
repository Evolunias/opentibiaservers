import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-canada');
}

export default function ThaisotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-canada" />;
}
