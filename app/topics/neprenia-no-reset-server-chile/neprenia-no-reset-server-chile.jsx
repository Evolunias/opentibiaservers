import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-chile');
}

export default function NepreniaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-chile" />;
}
