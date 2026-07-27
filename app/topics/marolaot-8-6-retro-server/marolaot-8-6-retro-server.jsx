import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-retro-server');
}

export default function Marolaot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-retro-server" />;
}
