import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-chile');
}

export default function AureraGlobalRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-chile" />;
}
