import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-highscores');
}

export default function ActiveTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-highscores" />;
}
