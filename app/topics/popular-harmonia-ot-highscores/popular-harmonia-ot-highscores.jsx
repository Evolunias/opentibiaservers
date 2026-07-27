import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-highscores');
}

export default function PopularHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-highscores" />;
}
