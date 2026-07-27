import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-highscores');
}

export default function BestDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-highscores" />;
}
