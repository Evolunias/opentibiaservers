import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-retro-server');
}

export default function Tibiara80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-retro-server" />;
}
