import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-retro-server');
}

export default function Ameria81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-retro-server" />;
}
