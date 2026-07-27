import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-retro-server');
}

export default function Tibiara13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-retro-server" />;
}
