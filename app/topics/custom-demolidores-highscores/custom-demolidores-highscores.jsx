import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-highscores');
}

export default function CustomDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-highscores" />;
}
