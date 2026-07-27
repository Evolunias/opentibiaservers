import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-highscores');
}

export default function NewArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-highscores" />;
}
