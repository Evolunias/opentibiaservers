import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-status');
}

export default function Tibia854RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-status" />;
}
