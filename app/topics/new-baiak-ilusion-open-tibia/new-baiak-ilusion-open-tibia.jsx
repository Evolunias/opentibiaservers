import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-open-tibia');
}

export default function NewBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-open-tibia" />;
}
