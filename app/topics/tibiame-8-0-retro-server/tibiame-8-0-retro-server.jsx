import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-retro-server');
}

export default function Tibiame80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-retro-server" />;
}
