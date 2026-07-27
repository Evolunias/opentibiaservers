import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-highscores');
}

export default function BestSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-highscores" />;
}
