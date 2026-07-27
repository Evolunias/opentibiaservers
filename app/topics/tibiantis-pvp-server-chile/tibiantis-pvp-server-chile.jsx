import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-chile');
}

export default function TibiantisPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-chile" />;
}
