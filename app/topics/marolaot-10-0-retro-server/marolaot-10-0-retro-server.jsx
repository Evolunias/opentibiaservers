import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-retro-server');
}

export default function Marolaot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-retro-server" />;
}
