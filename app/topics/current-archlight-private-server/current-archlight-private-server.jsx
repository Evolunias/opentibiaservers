import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-private-server');
}

export default function CurrentArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-private-server" />;
}
