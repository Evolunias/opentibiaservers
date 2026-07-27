import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-highscores');
}

export default function CustomTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-highscores" />;
}
