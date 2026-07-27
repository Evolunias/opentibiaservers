import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-highscores');
}

export default function ActiveThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-highscores" />;
}
