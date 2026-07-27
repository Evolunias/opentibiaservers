import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-chile');
}

export default function OxygenotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-chile" />;
}
