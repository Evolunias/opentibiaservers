import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-ots');
}

export default function ActiveArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-ots" />;
}
