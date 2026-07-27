import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-retro-server');
}

export default function Tibiara76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-retro-server" />;
}
