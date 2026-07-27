import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-highscores');
}

export default function OfficialSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-highscores" />;
}
