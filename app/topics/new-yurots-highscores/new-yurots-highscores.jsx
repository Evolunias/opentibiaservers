import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-highscores');
}

export default function NewYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-highscores" />;
}
