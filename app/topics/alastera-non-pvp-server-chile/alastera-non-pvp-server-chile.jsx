import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-chile');
}

export default function AlasteraNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-chile" />;
}
