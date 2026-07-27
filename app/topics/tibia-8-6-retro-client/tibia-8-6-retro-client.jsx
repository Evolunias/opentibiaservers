import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-client');
}

export default function Tibia86RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-client" />;
}
