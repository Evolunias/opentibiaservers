import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-highscores');
}

export default function CustomClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-highscores" />;
}
