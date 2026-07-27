import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-retro-server');
}

export default function Evolera1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-retro-server" />;
}
