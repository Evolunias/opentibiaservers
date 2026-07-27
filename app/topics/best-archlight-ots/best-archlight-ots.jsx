import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-ots');
}

export default function BestArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-ots" />;
}
