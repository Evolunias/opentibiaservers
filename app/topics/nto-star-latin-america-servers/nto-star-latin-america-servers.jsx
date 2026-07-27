import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-latin-america-servers');
}

export default function NtoStarLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-latin-america-servers" />;
}
