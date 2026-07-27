import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-servers');
}

export default function Tibia100RetroServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-servers" />;
}
