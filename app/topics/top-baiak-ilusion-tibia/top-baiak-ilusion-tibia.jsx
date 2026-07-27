import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-tibia');
}

export default function TopBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-tibia" />;
}
