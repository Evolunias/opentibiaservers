import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-highscores');
}

export default function NewAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-highscores" />;
}
