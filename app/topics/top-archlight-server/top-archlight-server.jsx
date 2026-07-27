import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-server');
}

export default function TopArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-server" />;
}
