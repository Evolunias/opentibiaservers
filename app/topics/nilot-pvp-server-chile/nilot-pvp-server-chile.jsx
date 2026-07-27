import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-chile');
}

export default function NilotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-chile" />;
}
