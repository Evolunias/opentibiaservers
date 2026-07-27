import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-highscores');
}

export default function OfficialTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-highscores" />;
}
