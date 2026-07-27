import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-retro-server');
}

export default function Realesta1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-retro-server" />;
}
