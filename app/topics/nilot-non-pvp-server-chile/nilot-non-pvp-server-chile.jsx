import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-chile');
}

export default function NilotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-chile" />;
}
