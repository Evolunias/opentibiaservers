import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-private-server');
}

export default function CustomArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-private-server" />;
}
