import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-servers');
}

export default function Tibia80RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-servers" />;
}
