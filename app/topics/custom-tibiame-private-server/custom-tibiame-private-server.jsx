import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-private-server');
}

export default function CustomTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-private-server" />;
}
