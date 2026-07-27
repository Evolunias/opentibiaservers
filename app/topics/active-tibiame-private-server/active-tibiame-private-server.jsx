import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-private-server');
}

export default function ActiveTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-private-server" />;
}
