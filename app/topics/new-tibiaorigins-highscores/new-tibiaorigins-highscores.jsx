import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-highscores');
}

export default function NewTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-highscores" />;
}
