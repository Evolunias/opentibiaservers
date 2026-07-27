import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-highscores');
}

export default function OfficialTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-highscores" />;
}
