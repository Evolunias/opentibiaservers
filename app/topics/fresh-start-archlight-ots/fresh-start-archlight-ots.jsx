import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-ots');
}

export default function FreshStartArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-ots" />;
}
