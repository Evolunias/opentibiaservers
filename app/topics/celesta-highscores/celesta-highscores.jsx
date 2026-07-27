import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-highscores');
}

export default function CelestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="celesta-highscores" />;
}
