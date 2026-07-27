import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-chile');
}

export default function LowExpOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-chile" />;
}
