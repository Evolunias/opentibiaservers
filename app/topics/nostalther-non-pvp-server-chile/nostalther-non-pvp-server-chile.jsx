import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-chile');
}

export default function NostaltherNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-chile" />;
}
