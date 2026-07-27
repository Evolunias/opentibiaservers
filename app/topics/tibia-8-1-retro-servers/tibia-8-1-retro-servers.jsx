import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-servers');
}

export default function Tibia81RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-servers" />;
}
