import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-retro-server');
}

export default function Tibiame11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-retro-server" />;
}
