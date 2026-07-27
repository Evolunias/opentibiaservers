import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-chile');
}

export default function TibijkaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-chile" />;
}
