import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-client');
}

export default function Tibia854RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-client" />;
}
