import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-status');
}

export default function Tibia11RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-status" />;
}
