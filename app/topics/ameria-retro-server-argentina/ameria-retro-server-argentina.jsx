import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-argentina');
}

export default function AmeriaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-argentina" />;
}
