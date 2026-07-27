import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-highscores');
}

export default function LowrateMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-highscores" />;
}
