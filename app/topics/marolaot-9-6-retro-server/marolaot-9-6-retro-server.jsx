import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-retro-server');
}

export default function Marolaot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-retro-server" />;
}
