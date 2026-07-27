import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-highscores');
}

export default function LowrateCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-highscores" />;
}
