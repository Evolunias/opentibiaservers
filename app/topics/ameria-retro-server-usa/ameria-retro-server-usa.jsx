import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-usa');
}

export default function AmeriaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-usa" />;
}
