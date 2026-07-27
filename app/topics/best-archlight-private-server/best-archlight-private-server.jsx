import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-private-server');
}

export default function BestArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-private-server" />;
}
