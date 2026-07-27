import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-highscores');
}

export default function FreshStartHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-highscores" />;
}
