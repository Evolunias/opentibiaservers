import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-tibia');
}

export default function NewSeasonBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-tibia" />;
}
