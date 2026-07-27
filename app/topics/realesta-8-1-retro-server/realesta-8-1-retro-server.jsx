import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-retro-server');
}

export default function Realesta81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-retro-server" />;
}
