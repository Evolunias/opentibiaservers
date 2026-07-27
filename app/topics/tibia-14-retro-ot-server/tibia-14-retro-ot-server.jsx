import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-ot-server');
}

export default function Tibia14RetroOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-ot-server" />;
}
