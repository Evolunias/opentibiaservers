import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-client');
}

export default function CurrentNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-client" />;
}
