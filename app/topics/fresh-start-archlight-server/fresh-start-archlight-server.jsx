import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-server');
}

export default function FreshStartArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-server" />;
}
