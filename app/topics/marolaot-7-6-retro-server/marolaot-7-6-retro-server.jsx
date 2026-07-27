import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-retro-server');
}

export default function Marolaot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-retro-server" />;
}
