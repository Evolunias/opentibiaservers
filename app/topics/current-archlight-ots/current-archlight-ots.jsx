import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-ots');
}

export default function CurrentArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-ots" />;
}
