import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-highscores');
}

export default function OfficialCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-canob-highscores" />;
}
