import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-pvp-server');
}

export default function Realesta96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-pvp-server" />;
}
