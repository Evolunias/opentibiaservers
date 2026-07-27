import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-chile');
}

export default function DuraOnlineNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-chile" />;
}
