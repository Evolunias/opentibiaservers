import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-highscores');
}

export default function ActiveClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-highscores" />;
}
