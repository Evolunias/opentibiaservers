import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-uk');
}

export default function AmeriaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-uk" />;
}
