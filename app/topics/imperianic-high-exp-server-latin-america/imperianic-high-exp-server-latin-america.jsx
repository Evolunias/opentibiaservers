import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-latin-america');
}

export default function ImperianicHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-latin-america" />;
}
