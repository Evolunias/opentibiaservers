import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-54-retro-server');
}

export default function Evolera854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-54-retro-server" />;
}
