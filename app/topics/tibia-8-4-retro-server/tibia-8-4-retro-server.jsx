import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-server');
}

export default function Tibia84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-server" />;
}
