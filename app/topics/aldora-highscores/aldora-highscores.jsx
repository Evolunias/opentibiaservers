import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-highscores');
}

export default function AldoraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="aldora-highscores" />;
}
