import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-ot-server');
}

export default function CurrentArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-ot-server" />;
}
