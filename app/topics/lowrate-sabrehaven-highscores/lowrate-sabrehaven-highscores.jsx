import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-highscores');
}

export default function LowrateSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-highscores" />;
}
