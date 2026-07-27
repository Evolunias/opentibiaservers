import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-highscores');
}

export default function NewTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-highscores" />;
}
