import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-usa');
}

export default function ThaisotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-usa" />;
}
