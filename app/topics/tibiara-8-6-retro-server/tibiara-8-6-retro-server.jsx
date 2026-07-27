import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-retro-server');
}

export default function Tibiara86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-retro-server" />;
}
