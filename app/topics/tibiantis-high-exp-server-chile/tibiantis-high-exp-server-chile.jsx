import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-chile');
}

export default function TibiantisHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-chile" />;
}
