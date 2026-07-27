import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-ot-server');
}

export default function BestArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-ot-server" />;
}
