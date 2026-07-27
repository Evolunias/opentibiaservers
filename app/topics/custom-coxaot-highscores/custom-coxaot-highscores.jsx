import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-highscores');
}

export default function CustomCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-highscores" />;
}
