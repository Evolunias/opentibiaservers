import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-client');
}

export default function LowrateNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-client" />;
}
