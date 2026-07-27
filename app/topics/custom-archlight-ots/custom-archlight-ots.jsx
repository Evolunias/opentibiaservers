import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-ots');
}

export default function CustomArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-ots" />;
}
