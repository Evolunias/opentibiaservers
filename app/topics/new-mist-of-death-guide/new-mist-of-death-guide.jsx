import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-guide');
}

export default function NewMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-guide" />;
}
