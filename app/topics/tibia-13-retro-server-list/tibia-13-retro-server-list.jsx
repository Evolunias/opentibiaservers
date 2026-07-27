import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-server-list');
}

export default function Tibia13RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-server-list" />;
}
