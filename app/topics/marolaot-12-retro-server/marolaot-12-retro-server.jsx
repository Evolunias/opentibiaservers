import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-retro-server');
}

export default function Marolaot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-retro-server" />;
}
