import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-client');
}

export default function Tibia71RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-client" />;
}
