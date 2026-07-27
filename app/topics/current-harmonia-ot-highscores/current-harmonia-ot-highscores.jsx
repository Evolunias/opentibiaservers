import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-highscores');
}

export default function CurrentHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-highscores" />;
}
