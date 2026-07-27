import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-highscores');
}

export default function LowrateSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-highscores" />;
}
