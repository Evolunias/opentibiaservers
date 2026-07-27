import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-highscores');
}

export default function ActiveYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-highscores" />;
}
