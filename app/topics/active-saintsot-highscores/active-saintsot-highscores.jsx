import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-highscores');
}

export default function ActiveSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-highscores" />;
}
