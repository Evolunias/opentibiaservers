import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-latin-america-server');
}

export default function TibiameLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-latin-america-server" />;
}
