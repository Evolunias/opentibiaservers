import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-status');
}

export default function Tibia12RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-status" />;
}
