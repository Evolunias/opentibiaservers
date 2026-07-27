import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-ots');
}

export default function PopularArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-ots" />;
}
