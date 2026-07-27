import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-argentina-server');
}

export default function TibiameArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-argentina-server" />;
}
