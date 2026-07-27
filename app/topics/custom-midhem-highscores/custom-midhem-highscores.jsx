import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-highscores');
}

export default function CustomMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-highscores" />;
}
