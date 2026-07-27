import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-highscores');
}

export default function NewMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-highscores" />;
}
