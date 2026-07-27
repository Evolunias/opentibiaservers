import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-private-server');
}

export default function ActiveArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-private-server" />;
}
