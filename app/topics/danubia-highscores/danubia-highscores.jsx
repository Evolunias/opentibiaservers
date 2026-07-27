import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-highscores');
}

export default function DanubiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="danubia-highscores" />;
}
