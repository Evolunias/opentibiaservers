import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-chile');
}

export default function MediviaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-chile" />;
}
