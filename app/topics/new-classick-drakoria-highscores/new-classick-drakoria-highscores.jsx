import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-highscores');
}

export default function NewClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-highscores" />;
}
