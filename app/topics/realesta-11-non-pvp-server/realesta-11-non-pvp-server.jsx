import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-non-pvp-server');
}

export default function Realesta11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-non-pvp-server" />;
}
