import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-client');
}

export default function Tibia81RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-client" />;
}
