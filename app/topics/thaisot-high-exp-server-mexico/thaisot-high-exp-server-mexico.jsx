import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-mexico');
}

export default function ThaisotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-mexico" />;
}
