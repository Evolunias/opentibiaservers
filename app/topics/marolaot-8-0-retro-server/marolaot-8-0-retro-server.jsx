import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-retro-server');
}

export default function Marolaot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-retro-server" />;
}
