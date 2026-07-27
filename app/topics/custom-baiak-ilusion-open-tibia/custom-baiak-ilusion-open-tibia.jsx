import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-open-tibia');
}

export default function CustomBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-open-tibia" />;
}
