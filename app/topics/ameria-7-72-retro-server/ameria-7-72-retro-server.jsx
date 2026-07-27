import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-retro-server');
}

export default function Ameria772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-retro-server" />;
}
