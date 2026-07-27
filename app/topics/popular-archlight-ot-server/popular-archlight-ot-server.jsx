import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-ot-server');
}

export default function PopularArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-ot-server" />;
}
