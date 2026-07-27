import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-highscores');
}

export default function TibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibijka-highscores" />;
}
