import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-highscores');
}

export default function OfficialTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-highscores" />;
}
