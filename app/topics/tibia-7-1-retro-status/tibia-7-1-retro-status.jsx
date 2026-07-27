import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-status');
}

export default function Tibia71RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-status" />;
}
