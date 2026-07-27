import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-france');
}

export default function AmeriaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-france" />;
}
