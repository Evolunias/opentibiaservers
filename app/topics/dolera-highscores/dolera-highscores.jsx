import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-highscores');
}

export default function DoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="dolera-highscores" />;
}
