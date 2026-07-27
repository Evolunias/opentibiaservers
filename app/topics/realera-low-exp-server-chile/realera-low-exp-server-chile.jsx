import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-chile');
}

export default function RealeraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-chile" />;
}
