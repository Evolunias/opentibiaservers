import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-highscores');
}

export default function CustomYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-highscores" />;
}
