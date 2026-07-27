import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-highscores');
}

export default function NewSeasonCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-highscores" />;
}
