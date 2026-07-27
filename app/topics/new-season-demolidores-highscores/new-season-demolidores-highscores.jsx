import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-highscores');
}

export default function NewSeasonDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-highscores" />;
}
