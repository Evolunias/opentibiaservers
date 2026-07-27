import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-chile');
}

export default function LumineraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-chile" />;
}
