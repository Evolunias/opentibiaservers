import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-highscores');
}

export default function TopMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-highscores" />;
}
