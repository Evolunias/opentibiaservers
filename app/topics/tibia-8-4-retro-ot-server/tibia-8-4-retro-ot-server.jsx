import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-ot-server');
}

export default function Tibia84RetroOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-ot-server" />;
}
