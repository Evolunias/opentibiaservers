import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-client');
}

export default function Tibia15RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-client" />;
}
