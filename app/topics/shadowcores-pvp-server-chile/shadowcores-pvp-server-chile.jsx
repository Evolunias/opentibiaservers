import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-chile');
}

export default function ShadowcoresPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-chile" />;
}
