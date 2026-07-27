import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-client');
}

export default function Tibia11RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-client" />;
}
