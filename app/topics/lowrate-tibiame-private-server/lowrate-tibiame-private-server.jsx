import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-private-server');
}

export default function LowrateTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-private-server" />;
}
