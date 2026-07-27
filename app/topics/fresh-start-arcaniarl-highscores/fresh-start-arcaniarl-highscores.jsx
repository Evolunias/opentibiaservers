import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-highscores');
}

export default function FreshStartArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-highscores" />;
}
