import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-highscores');
}

export default function TopTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-highscores" />;
}
