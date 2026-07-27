import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-highscores');
}

export default function MorganaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="morgana-highscores" />;
}
