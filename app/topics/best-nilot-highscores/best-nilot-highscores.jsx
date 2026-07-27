import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-highscores');
}

export default function BestNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-highscores" />;
}
