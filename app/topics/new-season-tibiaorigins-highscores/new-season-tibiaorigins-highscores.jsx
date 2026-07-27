import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-highscores');
}

export default function NewSeasonTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-highscores" />;
}
