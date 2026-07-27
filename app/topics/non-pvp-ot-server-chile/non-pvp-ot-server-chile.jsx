import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-chile');
}

export default function NonPvpOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-chile" />;
}
