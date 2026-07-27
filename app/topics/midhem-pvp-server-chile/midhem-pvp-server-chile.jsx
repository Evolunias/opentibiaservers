import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-chile');
}

export default function MidhemPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-chile" />;
}
