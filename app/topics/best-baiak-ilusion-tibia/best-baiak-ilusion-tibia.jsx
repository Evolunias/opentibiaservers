import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-tibia');
}

export default function BestBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-tibia" />;
}
