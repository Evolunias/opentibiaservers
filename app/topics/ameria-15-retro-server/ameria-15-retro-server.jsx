import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-retro-server');
}

export default function Ameria15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-retro-server" />;
}
