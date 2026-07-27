import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-retro-server');
}

export default function Evolera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-retro-server" />;
}
