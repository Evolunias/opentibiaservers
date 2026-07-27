import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-chile');
}

export default function HighExpOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-chile" />;
}
