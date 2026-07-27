import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-retro-server');
}

export default function Evolera81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-retro-server" />;
}
