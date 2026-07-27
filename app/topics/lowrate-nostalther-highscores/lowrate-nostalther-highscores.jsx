import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-highscores');
}

export default function LowrateNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-highscores" />;
}
