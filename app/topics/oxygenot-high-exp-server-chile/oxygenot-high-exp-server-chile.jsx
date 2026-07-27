import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-chile');
}

export default function OxygenotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-chile" />;
}
