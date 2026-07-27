import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-chile');
}

export default function OlderaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-chile" />;
}
