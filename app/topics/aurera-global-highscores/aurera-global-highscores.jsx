import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-highscores');
}

export default function AureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-highscores" />;
}
