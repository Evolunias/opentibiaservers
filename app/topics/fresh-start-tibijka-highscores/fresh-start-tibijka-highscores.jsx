import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-highscores');
}

export default function FreshStartTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-highscores" />;
}
