import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-private-server');
}

export default function TopTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-private-server" />;
}
