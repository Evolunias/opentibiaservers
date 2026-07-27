import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-highscores');
}

export default function CustomArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-highscores" />;
}
