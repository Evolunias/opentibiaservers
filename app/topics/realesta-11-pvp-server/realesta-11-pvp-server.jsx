import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-pvp-server');
}

export default function Realesta11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-pvp-server" />;
}
