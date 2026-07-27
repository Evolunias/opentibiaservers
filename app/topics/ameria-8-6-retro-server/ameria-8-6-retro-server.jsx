import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-retro-server');
}

export default function Ameria86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-retro-server" />;
}
