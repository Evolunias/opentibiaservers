import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-status');
}

export default function Tibia76RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-status" />;
}
