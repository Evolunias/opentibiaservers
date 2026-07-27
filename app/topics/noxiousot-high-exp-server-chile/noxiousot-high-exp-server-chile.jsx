import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-chile');
}

export default function NoxiousotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-chile" />;
}
