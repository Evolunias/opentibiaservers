import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-retro-server');
}

export default function Evolera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-retro-server" />;
}
