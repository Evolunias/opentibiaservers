import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-guide');
}

export default function CustomMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-guide" />;
}
