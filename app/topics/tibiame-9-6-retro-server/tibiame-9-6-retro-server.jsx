import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-retro-server');
}

export default function Tibiame96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-retro-server" />;
}
