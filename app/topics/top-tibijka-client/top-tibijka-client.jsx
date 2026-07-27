import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-client');
}

export default function TopTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-client" />;
}
