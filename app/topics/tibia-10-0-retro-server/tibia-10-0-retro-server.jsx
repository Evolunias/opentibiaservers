import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-server');
}

export default function Tibia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-server" />;
}
