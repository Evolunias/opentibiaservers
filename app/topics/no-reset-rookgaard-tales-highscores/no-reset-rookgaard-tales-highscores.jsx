import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-highscores');
}

export default function NoResetRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-highscores" />;
}
