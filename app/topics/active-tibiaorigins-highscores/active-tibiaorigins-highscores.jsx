import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-highscores');
}

export default function ActiveTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-highscores" />;
}
