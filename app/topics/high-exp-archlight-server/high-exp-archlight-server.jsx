import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-archlight-server');
}

export default function HighExpArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-archlight-server" />;
}
