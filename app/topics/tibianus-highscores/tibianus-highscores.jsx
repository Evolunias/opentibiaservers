import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-highscores');
}

export default function TibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibianus-highscores" />;
}
