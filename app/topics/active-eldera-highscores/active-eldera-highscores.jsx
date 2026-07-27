import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-highscores');
}

export default function ActiveElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-highscores" />;
}
