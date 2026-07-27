import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-highscores');
}

export default function ActiveArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-highscores" />;
}
