import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-highscores');
}

export default function PopularMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-highscores" />;
}
