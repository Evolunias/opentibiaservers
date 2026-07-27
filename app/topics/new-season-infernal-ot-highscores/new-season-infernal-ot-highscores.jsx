import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-highscores');
}

export default function NewSeasonInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-highscores" />;
}
