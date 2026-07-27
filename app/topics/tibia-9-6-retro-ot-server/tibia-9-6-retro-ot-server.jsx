import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-ot-server');
}

export default function Tibia96RetroOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-ot-server" />;
}
