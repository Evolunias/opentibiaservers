import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-retro-server');
}

export default function Tibiame12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-retro-server" />;
}
