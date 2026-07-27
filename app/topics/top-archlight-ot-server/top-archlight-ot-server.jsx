import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-ot-server');
}

export default function TopArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-ot-server" />;
}
