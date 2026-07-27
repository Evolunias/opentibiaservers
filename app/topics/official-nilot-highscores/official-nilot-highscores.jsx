import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-highscores');
}

export default function OfficialNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-highscores" />;
}
