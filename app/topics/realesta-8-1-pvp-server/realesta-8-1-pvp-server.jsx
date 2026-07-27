import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-pvp-server');
}

export default function Realesta81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-pvp-server" />;
}
