import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-chile');
}

export default function NostaltherPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-chile" />;
}
