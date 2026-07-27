import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-ots');
}

export default function OfficialBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-ots" />;
}
