import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-highscores');
}

export default function FreshStartSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-highscores" />;
}
