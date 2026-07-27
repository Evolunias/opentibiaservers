import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-servers');
}

export default function Tibia86RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-servers" />;
}
