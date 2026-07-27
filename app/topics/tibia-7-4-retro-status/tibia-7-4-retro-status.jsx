import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-status');
}

export default function Tibia74RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-status" />;
}
