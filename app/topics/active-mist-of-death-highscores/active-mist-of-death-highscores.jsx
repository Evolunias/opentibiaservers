import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-highscores');
}

export default function ActiveMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-highscores" />;
}
