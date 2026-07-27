import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-client');
}

export default function Tibia13RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-client" />;
}
