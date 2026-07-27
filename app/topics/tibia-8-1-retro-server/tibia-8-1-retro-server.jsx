import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-server');
}

export default function Tibia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-server" />;
}
