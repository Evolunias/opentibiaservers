import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-retro-server');
}

export default function Tibiara772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-retro-server" />;
}
