import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-server');
}

export default function Tibia71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-server" />;
}
