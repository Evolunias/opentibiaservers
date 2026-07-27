import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-highscores');
}

export default function HarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-highscores" />;
}
