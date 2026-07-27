import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-highscores');
}

export default function NewMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-highscores" />;
}
