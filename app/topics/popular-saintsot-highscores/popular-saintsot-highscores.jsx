import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-highscores');
}

export default function PopularSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-highscores" />;
}
