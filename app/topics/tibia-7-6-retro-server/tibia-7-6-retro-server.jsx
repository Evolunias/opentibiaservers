import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-server');
}

export default function Tibia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-server" />;
}
