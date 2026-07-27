import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-chile');
}

export default function PvpOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-chile" />;
}
