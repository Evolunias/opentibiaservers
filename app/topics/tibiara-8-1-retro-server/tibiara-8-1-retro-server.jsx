import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-retro-server');
}

export default function Tibiara81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-retro-server" />;
}
