import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-pvp-server');
}

export default function Realesta86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-pvp-server" />;
}
