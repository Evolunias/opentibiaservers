import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-chile');
}

export default function BlazeraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-chile" />;
}
