import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-status');
}

export default function Tibia15RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-status" />;
}
