import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-servers');
}

export default function Tibia11RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-servers" />;
}
