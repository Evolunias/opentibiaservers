import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka');
}

export default function FreshStartTibijkaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka" />;
}
