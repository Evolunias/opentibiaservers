import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-servers');
}

export default function Tibia854RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-servers" />;
}
