import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-chile');
}

export default function TibianusHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-chile" />;
}
