import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-highscores');
}

export default function TenebraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tenebra-highscores" />;
}
