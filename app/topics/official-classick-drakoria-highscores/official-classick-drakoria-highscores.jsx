import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-highscores');
}

export default function OfficialClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-highscores" />;
}
