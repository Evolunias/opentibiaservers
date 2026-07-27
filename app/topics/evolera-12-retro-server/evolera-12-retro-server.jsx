import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-retro-server');
}

export default function Evolera12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-retro-server" />;
}
