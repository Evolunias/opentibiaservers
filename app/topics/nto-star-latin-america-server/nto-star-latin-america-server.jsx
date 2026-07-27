import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-latin-america-server');
}

export default function NtoStarLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-latin-america-server" />;
}
