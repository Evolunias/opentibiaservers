import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-highscores');
}

export default function ActiveRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-highscores" />;
}
