import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-retro-server');
}

export default function Evolera84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-retro-server" />;
}
