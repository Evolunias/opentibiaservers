import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-tibia');
}

export default function ActiveBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-tibia" />;
}
