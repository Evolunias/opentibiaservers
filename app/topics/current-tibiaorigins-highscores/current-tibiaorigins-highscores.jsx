import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-highscores');
}

export default function CurrentTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-highscores" />;
}
