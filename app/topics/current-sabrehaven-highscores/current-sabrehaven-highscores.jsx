import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-highscores');
}

export default function CurrentSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-highscores" />;
}
