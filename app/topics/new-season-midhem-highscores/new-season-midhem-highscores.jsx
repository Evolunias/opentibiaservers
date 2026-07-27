import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-highscores');
}

export default function NewSeasonMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-highscores" />;
}
