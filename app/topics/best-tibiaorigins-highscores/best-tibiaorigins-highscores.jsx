import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-highscores');
}

export default function BestTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-highscores" />;
}
