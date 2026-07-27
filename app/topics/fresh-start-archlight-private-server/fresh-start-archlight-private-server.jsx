import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-private-server');
}

export default function FreshStartArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-private-server" />;
}
