import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-archlight-server');
}

export default function LowExpArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-archlight-server" />;
}
