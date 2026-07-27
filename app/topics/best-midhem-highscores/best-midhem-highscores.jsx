import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-highscores');
}

export default function BestMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-highscores" />;
}
