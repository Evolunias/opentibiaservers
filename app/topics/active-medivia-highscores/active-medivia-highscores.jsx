import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-highscores');
}

export default function ActiveMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-highscores" />;
}
