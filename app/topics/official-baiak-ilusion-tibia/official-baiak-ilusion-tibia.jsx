import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-tibia');
}

export default function OfficialBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-tibia" />;
}
