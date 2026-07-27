import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-highscores');
}

export default function FreshStartZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-highscores" />;
}
