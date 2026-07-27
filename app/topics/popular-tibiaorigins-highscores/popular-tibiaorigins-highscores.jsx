import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-highscores');
}

export default function PopularTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-highscores" />;
}
