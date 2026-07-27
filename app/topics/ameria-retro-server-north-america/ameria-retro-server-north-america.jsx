import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-north-america');
}

export default function AmeriaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-north-america" />;
}
