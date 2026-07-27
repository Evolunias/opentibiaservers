import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-highscores');
}

export default function ActiveDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-highscores" />;
}
