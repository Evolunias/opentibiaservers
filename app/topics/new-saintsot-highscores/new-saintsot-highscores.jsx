import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-highscores');
}

export default function NewSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-highscores" />;
}
