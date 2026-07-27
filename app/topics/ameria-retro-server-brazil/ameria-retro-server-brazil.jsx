import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-brazil');
}

export default function AmeriaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-brazil" />;
}
