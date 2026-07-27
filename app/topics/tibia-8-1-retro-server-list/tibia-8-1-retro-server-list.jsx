import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-server-list');
}

export default function Tibia81RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-server-list" />;
}
