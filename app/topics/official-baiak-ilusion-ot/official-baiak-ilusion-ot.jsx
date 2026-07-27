import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-ot');
}

export default function OfficialBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-ot" />;
}
