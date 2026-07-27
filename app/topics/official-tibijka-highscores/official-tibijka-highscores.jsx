import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-highscores');
}

export default function OfficialTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-highscores" />;
}
