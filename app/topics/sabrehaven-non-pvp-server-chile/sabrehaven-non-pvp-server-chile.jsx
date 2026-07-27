import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-chile');
}

export default function SabrehavenNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-chile" />;
}
