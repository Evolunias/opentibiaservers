import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-highscores');
}

export default function DemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="demolidores-highscores" />;
}
