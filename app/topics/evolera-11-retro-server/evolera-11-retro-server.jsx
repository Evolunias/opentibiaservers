import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-retro-server');
}

export default function Evolera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-retro-server" />;
}
