import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-open-tibia');
}

export default function NoResetBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-open-tibia" />;
}
