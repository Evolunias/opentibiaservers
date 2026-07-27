import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-highscores');
}

export default function UnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="unline-highscores" />;
}
