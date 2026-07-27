import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-private-server');
}

export default function CurrentTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-private-server" />;
}
