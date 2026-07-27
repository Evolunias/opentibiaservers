import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-retro-server');
}

export default function Tibiame14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-retro-server" />;
}
