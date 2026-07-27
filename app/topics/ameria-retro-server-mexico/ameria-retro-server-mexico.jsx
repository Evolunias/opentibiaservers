import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-mexico');
}

export default function AmeriaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-mexico" />;
}
