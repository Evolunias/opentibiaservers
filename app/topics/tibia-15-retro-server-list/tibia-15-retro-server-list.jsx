import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-server-list');
}

export default function Tibia15RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-server-list" />;
}
