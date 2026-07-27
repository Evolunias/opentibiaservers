import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-highscores');
}

export default function MiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="miracle-highscores" />;
}
