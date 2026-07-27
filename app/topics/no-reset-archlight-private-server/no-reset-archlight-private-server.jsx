import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-private-server');
}

export default function NoResetArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-private-server" />;
}
