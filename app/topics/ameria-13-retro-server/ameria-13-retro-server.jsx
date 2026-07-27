import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-retro-server');
}

export default function Ameria13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-retro-server" />;
}
