import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-open-tibia');
}

export default function BestBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-open-tibia" />;
}
