import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-retro-server');
}

export default function Ameria96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-retro-server" />;
}
