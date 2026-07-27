import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-highscores');
}

export default function SaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="saintsot-highscores" />;
}
