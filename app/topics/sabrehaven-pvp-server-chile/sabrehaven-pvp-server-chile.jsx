import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-chile');
}

export default function SabrehavenPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-chile" />;
}
