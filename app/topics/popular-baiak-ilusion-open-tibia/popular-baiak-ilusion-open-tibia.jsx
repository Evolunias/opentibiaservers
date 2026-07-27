import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-open-tibia');
}

export default function PopularBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-open-tibia" />;
}
