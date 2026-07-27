import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-highscores');
}

export default function OfficialMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-highscores" />;
}
