import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-retro-server');
}

export default function Ameria76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-retro-server" />;
}
