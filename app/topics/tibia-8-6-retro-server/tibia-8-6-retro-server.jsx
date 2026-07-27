import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-server');
}

export default function Tibia86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-server" />;
}
