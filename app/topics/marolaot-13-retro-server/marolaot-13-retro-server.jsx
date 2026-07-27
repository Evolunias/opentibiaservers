import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-retro-server');
}

export default function Marolaot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-retro-server" />;
}
