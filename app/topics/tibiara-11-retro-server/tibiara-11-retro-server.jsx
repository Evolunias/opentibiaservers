import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-retro-server');
}

export default function Tibiara11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-retro-server" />;
}
