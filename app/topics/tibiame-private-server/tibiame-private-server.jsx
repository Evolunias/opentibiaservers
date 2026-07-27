import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-private-server');
}

export default function TibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-private-server" />;
}
