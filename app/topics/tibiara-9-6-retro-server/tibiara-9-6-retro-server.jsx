import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-retro-server');
}

export default function Tibiara96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-retro-server" />;
}
