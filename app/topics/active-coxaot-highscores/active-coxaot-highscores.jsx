import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-highscores');
}

export default function ActiveCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-highscores" />;
}
