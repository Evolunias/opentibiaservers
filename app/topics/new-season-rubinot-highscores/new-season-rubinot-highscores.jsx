import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-highscores');
}

export default function NewSeasonRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-highscores" />;
}
