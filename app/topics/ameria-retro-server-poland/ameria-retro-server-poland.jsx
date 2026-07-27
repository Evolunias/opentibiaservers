import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-poland');
}

export default function AmeriaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-poland" />;
}
