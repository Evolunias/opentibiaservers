import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-retro-server');
}

export default function Realesta80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-retro-server" />;
}
