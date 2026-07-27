import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-retro-server');
}

export default function Evolera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-retro-server" />;
}
