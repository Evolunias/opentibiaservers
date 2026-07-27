import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-client');
}

export default function Tibia100RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-client" />;
}
