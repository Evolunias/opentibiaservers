import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-retro-server');
}

export default function Evolera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-retro-server" />;
}
