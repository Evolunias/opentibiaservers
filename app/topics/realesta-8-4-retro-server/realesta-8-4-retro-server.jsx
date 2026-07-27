import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-retro-server');
}

export default function Realesta84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-retro-server" />;
}
