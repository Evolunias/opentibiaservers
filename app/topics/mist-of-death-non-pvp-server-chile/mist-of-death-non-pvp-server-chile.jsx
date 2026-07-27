import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-chile');
}

export default function MistOfDeathNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-chile" />;
}
