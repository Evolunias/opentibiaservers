import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-highscores');
}

export default function HarmoniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="harmonia-highscores" />;
}
