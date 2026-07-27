import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-highscores');
}

export default function NewHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-highscores" />;
}
