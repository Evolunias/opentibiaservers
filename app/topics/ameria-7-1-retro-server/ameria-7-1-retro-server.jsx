import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-retro-server');
}

export default function Ameria71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-retro-server" />;
}
