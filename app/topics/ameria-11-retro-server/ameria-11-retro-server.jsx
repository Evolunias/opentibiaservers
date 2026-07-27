import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-retro-server');
}

export default function Ameria11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-retro-server" />;
}
