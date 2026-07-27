import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-north-america-server');
}

export default function NtoStarNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-north-america-server" />;
}
