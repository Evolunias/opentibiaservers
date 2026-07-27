import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-ot-server');
}

export default function ActiveArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-ot-server" />;
}
