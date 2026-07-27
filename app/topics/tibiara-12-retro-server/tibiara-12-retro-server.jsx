import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-retro-server');
}

export default function Tibiara12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-retro-server" />;
}
