import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-server');
}

export default function Tibia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-server" />;
}
