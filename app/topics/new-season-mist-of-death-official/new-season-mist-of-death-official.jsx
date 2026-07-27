import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-official');
}

export default function NewSeasonMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-official" />;
}
