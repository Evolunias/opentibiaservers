import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-client');
}

export default function Tibia74RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-client" />;
}
