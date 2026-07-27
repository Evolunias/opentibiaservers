import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-server-list');
}

export default function Tibia14RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-server-list" />;
}
