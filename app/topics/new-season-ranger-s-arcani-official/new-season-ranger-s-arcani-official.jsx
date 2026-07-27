import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-official');
}

export default function NewSeasonRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-official" />;
}
