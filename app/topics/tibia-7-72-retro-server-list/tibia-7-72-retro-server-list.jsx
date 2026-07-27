import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-server-list');
}

export default function Tibia772RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-server-list" />;
}
