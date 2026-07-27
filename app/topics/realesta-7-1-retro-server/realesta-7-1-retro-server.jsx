import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-retro-server');
}

export default function Realesta71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-retro-server" />;
}
