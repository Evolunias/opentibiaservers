import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-germany');
}

export default function AmeriaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-germany" />;
}
