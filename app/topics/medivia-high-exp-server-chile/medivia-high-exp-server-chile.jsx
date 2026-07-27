import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-chile');
}

export default function MediviaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-chile" />;
}
