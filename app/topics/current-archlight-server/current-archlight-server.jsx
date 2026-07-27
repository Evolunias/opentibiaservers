import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-server');
}

export default function CurrentArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-server" />;
}
