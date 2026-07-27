import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-france');
}

export default function AmeriaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-france" />;
}
