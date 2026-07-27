import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-highscores');
}

export default function BestAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-highscores" />;
}
