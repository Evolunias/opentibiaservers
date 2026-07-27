import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-highscores');
}

export default function NeranaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="nerana-highscores" />;
}
