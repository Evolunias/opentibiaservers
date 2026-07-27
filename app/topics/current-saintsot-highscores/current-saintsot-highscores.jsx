import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-highscores');
}

export default function CurrentSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-highscores" />;
}
