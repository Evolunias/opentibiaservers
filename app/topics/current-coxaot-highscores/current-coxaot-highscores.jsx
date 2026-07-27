import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-highscores');
}

export default function CurrentCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-highscores" />;
}
