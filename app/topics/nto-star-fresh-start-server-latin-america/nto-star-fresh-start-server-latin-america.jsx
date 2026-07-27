import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-latin-america');
}

export default function NtoStarFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-latin-america" />;
}
