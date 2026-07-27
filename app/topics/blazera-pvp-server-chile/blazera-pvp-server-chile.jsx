import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-chile');
}

export default function BlazeraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-chile" />;
}
