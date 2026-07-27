import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-guide');
}

export default function CurrentRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-guide" />;
}
