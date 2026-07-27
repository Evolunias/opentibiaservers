import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-chile');
}

export default function TibiaraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-chile" />;
}
