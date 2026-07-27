import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-server');
}

export default function Tibia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-server" />;
}
