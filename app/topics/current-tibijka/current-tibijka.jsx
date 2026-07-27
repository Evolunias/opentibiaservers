import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka');
}

export default function CurrentTibijkaKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka" />;
}
