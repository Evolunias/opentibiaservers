import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-retro-server');
}

export default function Evolera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-retro-server" />;
}
