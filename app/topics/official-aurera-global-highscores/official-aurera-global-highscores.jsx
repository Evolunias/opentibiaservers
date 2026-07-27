import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-highscores');
}

export default function OfficialAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-highscores" />;
}
