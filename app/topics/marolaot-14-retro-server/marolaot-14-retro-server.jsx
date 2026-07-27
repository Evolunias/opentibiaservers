import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-retro-server');
}

export default function Marolaot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-retro-server" />;
}
