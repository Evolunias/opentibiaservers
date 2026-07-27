import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-ot-server');
}

export default function CustomArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-ot-server" />;
}
