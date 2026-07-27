import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-retro-server');
}

export default function Tibiame15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-retro-server" />;
}
