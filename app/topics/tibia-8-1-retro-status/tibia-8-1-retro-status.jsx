import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-status');
}

export default function Tibia81RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-status" />;
}
