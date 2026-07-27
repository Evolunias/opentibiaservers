import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-chile');
}

export default function OriginaltibiaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-chile" />;
}
