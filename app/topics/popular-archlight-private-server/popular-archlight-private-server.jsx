import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-private-server');
}

export default function PopularArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-private-server" />;
}
