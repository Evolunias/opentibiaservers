import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-chile');
}

export default function BlazeraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-chile" />;
}
