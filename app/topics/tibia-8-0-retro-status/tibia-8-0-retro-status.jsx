import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-status');
}

export default function Tibia80RetroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-status" />;
}
