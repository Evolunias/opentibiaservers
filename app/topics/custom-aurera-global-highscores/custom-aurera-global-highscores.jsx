import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-highscores');
}

export default function CustomAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-highscores" />;
}
