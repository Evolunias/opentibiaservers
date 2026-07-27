import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-retro-server');
}

export default function Ameria14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-retro-server" />;
}
