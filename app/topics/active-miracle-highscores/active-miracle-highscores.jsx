import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-highscores');
}

export default function ActiveMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-highscores" />;
}
