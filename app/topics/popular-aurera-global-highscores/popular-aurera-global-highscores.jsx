import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-highscores');
}

export default function PopularAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-highscores" />;
}
