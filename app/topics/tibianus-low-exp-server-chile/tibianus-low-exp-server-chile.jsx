import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-chile');
}

export default function TibianusLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-chile" />;
}
