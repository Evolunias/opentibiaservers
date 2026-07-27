import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-highscores');
}

export default function BestHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-highscores" />;
}
