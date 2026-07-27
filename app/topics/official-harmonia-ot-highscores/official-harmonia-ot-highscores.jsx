import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-highscores');
}

export default function OfficialHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-highscores" />;
}
