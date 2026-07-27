import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-highscores');
}

export default function LowrateTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-highscores" />;
}
