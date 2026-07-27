import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-ots');
}

export default function TopArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-ots" />;
}
