import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-highscores');
}

export default function OfficialSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-highscores" />;
}
