import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-highscores');
}

export default function TibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-highscores" />;
}
