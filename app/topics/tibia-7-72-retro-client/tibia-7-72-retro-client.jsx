import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-client');
}

export default function Tibia772RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-client" />;
}
