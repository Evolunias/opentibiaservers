import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-highscores');
}

export default function InfernaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="inferna-highscores" />;
}
