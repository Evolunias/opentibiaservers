import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-ots');
}

export default function OfficialArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-ots" />;
}
