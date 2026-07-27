import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-tibia');
}

export default function NoResetBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-tibia" />;
}
