import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-highscores');
}

export default function CustomTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-highscores" />;
}
