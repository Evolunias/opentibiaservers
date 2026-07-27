import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-chile');
}

export default function TibiameFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-chile" />;
}
