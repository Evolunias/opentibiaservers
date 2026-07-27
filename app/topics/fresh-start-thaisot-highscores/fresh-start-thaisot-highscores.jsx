import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-highscores');
}

export default function FreshStartThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-highscores" />;
}
