import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-highscores');
}

export default function NewDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-highscores" />;
}
