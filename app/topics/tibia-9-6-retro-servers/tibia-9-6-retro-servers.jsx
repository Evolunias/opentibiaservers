import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-servers');
}

export default function Tibia96RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-servers" />;
}
