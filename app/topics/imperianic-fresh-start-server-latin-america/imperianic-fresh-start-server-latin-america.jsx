import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-latin-america');
}

export default function ImperianicFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-latin-america" />;
}
