import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-highscores');
}

export default function FreshStartAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-highscores" />;
}
