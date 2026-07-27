import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-highscores');
}

export default function AsteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="astera-highscores" />;
}
