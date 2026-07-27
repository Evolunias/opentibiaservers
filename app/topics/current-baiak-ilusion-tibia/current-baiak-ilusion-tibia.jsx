import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-tibia');
}

export default function CurrentBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-tibia" />;
}
