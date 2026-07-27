import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-client');
}

export default function Tibia14RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-client" />;
}
