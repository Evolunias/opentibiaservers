import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-highscores');
}

export default function ActiveZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-highscores" />;
}
