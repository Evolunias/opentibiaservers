import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-highscores');
}

export default function CustomSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-highscores" />;
}
