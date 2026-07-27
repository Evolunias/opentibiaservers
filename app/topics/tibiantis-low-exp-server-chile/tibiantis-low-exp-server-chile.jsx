import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-chile');
}

export default function TibiantisLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-chile" />;
}
