import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-highscores');
}

export default function CustomHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-highscores" />;
}
