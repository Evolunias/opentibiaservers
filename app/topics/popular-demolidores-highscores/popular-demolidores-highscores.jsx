import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-highscores');
}

export default function PopularDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-highscores" />;
}
