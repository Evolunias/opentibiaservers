import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-highscores');
}

export default function CurrentZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-highscores" />;
}
