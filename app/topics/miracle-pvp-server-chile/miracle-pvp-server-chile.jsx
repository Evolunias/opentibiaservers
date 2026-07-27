import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-chile');
}

export default function MiraclePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-chile" />;
}
