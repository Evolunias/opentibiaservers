import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-highscores');
}

export default function EterniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="eternia-highscores" />;
}
