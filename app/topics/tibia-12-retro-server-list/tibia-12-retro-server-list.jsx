import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-server-list');
}

export default function Tibia12RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-server-list" />;
}
