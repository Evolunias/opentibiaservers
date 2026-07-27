import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-status');
}

export default function Tibia14RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-status" />;
}
