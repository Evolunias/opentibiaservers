import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-chile');
}

export default function TibijkaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-chile" />;
}
