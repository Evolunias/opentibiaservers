import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-chile');
}

export default function TibiamePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-chile" />;
}
