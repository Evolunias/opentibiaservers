import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-retro-server');
}

export default function Tibiara14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-retro-server" />;
}
