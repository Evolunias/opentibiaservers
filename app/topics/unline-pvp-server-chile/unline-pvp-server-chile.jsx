import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-chile');
}

export default function UnlinePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-chile" />;
}
