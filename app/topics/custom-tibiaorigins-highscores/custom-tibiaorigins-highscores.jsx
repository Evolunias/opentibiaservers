import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-highscores');
}

export default function CustomTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-highscores" />;
}
