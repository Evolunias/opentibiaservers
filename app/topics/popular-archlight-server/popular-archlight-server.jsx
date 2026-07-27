import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-server');
}

export default function PopularArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-server" />;
}
