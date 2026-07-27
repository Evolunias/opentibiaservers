import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-chile');
}

export default function NoxiousotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-chile" />;
}
