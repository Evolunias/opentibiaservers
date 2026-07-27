import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-highscores');
}

export default function OfficialThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-highscores" />;
}
