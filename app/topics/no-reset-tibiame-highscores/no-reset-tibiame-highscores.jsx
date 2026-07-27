import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-highscores');
}

export default function NoResetTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-highscores" />;
}
