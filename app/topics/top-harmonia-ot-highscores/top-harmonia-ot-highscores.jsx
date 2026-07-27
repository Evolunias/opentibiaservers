import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-highscores');
}

export default function TopHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-highscores" />;
}
