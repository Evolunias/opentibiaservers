import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-highscores');
}

export default function OfficialClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-highscores" />;
}
