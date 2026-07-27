import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-retro-server');
}

export default function Ameria12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-retro-server" />;
}
