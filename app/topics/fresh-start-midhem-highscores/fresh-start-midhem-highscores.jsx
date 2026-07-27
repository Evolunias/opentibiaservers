import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-highscores');
}

export default function FreshStartMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-highscores" />;
}
