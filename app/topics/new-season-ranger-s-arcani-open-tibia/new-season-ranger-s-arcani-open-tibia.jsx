import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-open-tibia');
}

export default function NewSeasonRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-open-tibia" />;
}
