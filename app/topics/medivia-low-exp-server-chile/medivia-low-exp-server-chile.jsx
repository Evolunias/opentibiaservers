import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-chile');
}

export default function MediviaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-chile" />;
}
