import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-highscores');
}

export default function SecuraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="secura-highscores" />;
}
