import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-retro-server');
}

export default function Realesta11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-retro-server" />;
}
