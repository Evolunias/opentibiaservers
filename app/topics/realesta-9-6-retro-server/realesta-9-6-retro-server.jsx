import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-retro-server');
}

export default function Realesta96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-retro-server" />;
}
