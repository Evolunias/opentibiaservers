import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-retro-server');
}

export default function Evolera71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-retro-server" />;
}
