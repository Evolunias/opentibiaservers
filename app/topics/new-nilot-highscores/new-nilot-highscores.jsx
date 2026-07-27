import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-highscores');
}

export default function NewNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-highscores" />;
}
