import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-open-tibia');
}

export default function TopBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-open-tibia" />;
}
