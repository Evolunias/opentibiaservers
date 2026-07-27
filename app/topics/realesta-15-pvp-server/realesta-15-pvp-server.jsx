import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-pvp-server');
}

export default function Realesta15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-pvp-server" />;
}
