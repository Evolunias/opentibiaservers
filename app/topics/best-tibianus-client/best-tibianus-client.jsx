import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-client');
}

export default function BestTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-client" />;
}
