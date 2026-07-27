import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-chile');
}

export default function NepreniaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-chile" />;
}
