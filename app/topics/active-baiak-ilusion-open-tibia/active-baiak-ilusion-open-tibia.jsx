import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-open-tibia');
}

export default function ActiveBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-open-tibia" />;
}
