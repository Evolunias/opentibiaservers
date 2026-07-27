import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-highscores');
}

export default function RealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="realesta-highscores" />;
}
