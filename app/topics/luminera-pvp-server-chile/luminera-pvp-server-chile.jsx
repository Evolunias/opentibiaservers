import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-chile');
}

export default function LumineraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-chile" />;
}
