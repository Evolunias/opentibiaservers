import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-retro-server');
}

export default function Marolaot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-retro-server" />;
}
