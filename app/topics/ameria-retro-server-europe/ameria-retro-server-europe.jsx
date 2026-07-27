import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-europe');
}

export default function AmeriaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-europe" />;
}
