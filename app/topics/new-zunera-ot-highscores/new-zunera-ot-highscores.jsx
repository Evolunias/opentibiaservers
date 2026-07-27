import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-highscores');
}

export default function NewZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-highscores" />;
}
