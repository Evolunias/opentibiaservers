import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-highscores');
}

export default function TopSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-highscores" />;
}
