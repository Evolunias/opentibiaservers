import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-server-list');
}

export default function Tibia96RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-server-list" />;
}
