import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-private-server');
}

export default function NewTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-private-server" />;
}
