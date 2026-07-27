import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-retro-server');
}

export default function Marolaot71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-retro-server" />;
}
