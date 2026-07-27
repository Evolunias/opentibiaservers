import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-highscores');
}

export default function CustomThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-highscores" />;
}
