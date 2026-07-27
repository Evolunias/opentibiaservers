import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-server');
}

export default function BestArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-server" />;
}
