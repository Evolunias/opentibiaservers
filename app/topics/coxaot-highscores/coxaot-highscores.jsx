import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-highscores');
}

export default function CoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="coxaot-highscores" />;
}
