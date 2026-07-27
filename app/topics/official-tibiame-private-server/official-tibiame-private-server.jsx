import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-private-server');
}

export default function OfficialTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-private-server" />;
}
