import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-retro-server');
}

export default function Tibiame100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-retro-server" />;
}
