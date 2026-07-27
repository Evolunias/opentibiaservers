import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-chile');
}

export default function KasteriaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-chile" />;
}
