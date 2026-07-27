import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-highscores');
}

export default function NewRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-highscores" />;
}
