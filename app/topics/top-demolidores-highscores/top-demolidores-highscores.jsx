import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-highscores');
}

export default function TopDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-highscores" />;
}
