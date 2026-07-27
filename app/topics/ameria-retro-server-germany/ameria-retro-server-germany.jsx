import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-germany');
}

export default function AmeriaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-germany" />;
}
