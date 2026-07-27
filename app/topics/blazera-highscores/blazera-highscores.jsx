import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-highscores');
}

export default function BlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="blazera-highscores" />;
}
