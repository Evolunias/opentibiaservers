import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-highscores');
}

export default function ActiveAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-highscores" />;
}
