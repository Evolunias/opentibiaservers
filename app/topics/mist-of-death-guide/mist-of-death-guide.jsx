import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-guide');
}

export default function MistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-guide" />;
}
