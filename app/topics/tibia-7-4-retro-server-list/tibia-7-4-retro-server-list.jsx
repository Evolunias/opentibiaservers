import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-server-list');
}

export default function Tibia74RetroServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-server-list" />;
}
