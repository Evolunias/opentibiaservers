import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-highscores');
}

export default function PopularInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-highscores" />;
}
