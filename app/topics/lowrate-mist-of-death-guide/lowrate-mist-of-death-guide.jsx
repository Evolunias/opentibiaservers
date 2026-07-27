import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-guide');
}

export default function LowrateMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-guide" />;
}
