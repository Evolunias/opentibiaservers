import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-canada');
}

export default function ThaisotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-canada" />;
}
