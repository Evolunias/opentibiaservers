import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-retro-server');
}

export default function Ameria100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-retro-server" />;
}
