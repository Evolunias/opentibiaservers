import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-highscores');
}

export default function ActiveTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-highscores" />;
}
