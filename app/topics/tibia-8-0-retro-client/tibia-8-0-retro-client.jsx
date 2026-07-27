import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-client');
}

export default function Tibia80RetroClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-client" />;
}
