import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-chile');
}

export default function AmeriaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-chile" />;
}
