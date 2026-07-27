import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-highscores');
}

export default function OfficialBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-highscores" />;
}
