import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-highscores');
}

export default function FreshStartDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-highscores" />;
}
