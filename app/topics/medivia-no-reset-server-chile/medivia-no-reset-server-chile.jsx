import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-chile');
}

export default function MediviaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-chile" />;
}
