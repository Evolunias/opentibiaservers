import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-highscores');
}

export default function FreshStartCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-highscores" />;
}
