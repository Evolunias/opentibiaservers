import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-tibia');
}

export default function PopularBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-tibia" />;
}
