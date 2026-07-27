import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-chile');
}

export default function UnlineNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-chile" />;
}
