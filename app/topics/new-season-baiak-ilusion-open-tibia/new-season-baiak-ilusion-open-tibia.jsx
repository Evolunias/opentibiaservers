import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-open-tibia');
}

export default function NewSeasonBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-open-tibia" />;
}
