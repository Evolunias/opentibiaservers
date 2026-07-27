import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-chile');
}

export default function RubinotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-chile" />;
}
