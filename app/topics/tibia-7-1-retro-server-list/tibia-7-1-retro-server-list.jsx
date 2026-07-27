import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-server-list');
}

export default function Tibia71RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-server-list" />;
}
