import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-non-pvp-server');
}

export default function Realesta74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-non-pvp-server" />;
}
