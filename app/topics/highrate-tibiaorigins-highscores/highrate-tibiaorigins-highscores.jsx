import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-highscores');
}

export default function HighrateTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-highscores" />;
}
