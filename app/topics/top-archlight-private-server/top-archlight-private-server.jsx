import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-private-server');
}

export default function TopArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-private-server" />;
}
