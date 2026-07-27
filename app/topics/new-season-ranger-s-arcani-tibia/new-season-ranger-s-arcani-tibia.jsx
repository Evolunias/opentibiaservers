import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-tibia');
}

export default function NewSeasonRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-tibia" />;
}
