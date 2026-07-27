import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-ot-server');
}

export default function Tibia11RetroOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-ot-server" />;
}
