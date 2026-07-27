import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-chile');
}

export default function TibijkaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-chile" />;
}
