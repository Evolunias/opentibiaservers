import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-france');
}

export default function AmeriaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-france" />;
}
