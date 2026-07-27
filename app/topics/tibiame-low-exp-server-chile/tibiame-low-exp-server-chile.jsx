import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-chile');
}

export default function TibiameLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-chile" />;
}
