import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-retro-server');
}

export default function Ameria80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-retro-server" />;
}
