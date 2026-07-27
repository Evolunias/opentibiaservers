import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-highscores');
}

export default function NoResetXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-highscores" />;
}
