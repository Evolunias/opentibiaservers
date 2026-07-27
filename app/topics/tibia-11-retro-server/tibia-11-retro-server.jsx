import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-server');
}

export default function Tibia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-server" />;
}
