import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-retro-server');
}

export default function Tibiame81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-retro-server" />;
}
