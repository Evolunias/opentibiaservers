import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-highscores');
}

export default function CustomTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-highscores" />;
}
