import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-server');
}

export default function ActiveArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-server" />;
}
