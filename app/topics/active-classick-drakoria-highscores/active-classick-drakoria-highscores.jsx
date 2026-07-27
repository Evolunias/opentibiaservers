import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-highscores');
}

export default function ActiveClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-highscores" />;
}
