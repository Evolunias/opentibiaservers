import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-latin-america');
}

export default function TibiaraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-latin-america" />;
}
