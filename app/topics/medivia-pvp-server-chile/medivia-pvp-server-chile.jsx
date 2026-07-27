import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-chile');
}

export default function MediviaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-chile" />;
}
