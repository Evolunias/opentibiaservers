import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-north-america-server');
}

export default function TibiameNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-north-america-server" />;
}
