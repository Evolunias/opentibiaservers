import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-chile');
}

export default function BlazeraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-chile" />;
}
