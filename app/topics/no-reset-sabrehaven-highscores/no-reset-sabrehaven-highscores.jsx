import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-highscores');
}

export default function NoResetSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-highscores" />;
}
