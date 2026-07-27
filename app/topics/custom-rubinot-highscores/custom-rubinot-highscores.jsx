import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-highscores');
}

export default function CustomRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-highscores" />;
}
