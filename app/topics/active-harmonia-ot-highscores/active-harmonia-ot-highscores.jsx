import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-highscores');
}

export default function ActiveHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-highscores" />;
}
