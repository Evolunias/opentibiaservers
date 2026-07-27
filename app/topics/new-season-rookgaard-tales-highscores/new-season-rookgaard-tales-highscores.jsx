import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-highscores');
}

export default function NewSeasonRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-highscores" />;
}
