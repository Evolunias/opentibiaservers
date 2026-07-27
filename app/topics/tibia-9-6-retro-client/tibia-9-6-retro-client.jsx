import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-client');
}

export default function Tibia96RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-client" />;
}
