import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-retro-server');
}

export default function Tibiara1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-retro-server" />;
}
