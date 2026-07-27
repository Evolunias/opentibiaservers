import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-highscores');
}

export default function NoResetTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-highscores" />;
}
