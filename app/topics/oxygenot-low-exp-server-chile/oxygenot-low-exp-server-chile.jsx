import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-chile');
}

export default function OxygenotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-chile" />;
}
