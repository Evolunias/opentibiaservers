import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-highscores');
}

export default function ArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-highscores" />;
}
