import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-chile');
}

export default function ElderaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-chile" />;
}
