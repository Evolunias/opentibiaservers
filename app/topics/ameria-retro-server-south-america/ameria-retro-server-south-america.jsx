import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-retro-server-south-america');
}

export default function AmeriaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-retro-server-south-america" />;
}
