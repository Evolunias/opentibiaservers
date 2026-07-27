import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-retro-server');
}

export default function Marolaot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-retro-server" />;
}
