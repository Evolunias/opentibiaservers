import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-official');
}

export default function NewSeasonEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-official" />;
}
