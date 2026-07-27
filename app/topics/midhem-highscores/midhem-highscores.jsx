import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-highscores');
}

export default function MidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="midhem-highscores" />;
}
