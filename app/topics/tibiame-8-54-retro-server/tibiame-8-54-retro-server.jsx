import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-retro-server');
}

export default function Tibiame854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-retro-server" />;
}
