import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-highscores');
}

export default function ActiveTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-highscores" />;
}
