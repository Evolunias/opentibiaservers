import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka');
}

export default function TibijkaKeywordPage() {
  return <StaticKeywordPage slug="tibijka" />;
}
