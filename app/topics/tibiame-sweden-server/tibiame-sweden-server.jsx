import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-sweden-server');
}

export default function TibiameSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-sweden-server" />;
}
