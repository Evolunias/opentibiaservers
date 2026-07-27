import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-highscores');
}

export default function NoResetAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-highscores" />;
}
