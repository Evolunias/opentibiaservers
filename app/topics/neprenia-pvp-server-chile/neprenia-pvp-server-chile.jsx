import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-chile');
}

export default function NepreniaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-chile" />;
}
