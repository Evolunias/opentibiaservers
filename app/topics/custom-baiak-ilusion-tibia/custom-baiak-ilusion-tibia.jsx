import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-tibia');
}

export default function CustomBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-tibia" />;
}
