import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-tibia');
}

export default function NewBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-tibia" />;
}
