import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-chile');
}

export default function DuraOnlinePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-chile" />;
}
