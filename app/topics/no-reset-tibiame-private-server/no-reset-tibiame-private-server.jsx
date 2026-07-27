import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-private-server');
}

export default function NoResetTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-private-server" />;
}
