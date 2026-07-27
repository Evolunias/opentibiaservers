import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-canada');
}

export default function AmeriaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-canada" />;
}
