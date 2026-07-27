import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-highscores');
}

export default function OfficialDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-highscores" />;
}
