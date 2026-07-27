import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-retro-server');
}

export default function Marolaot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-retro-server" />;
}
