import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-client');
}

export default function BestTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-client" />;
}
