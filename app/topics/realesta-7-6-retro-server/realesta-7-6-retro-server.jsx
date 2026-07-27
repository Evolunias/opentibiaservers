import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-retro-server');
}

export default function Realesta76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-retro-server" />;
}
