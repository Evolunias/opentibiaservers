import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka');
}

export default function LowrateTibijkaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka" />;
}
