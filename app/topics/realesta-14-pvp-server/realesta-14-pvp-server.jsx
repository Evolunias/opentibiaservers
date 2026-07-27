import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-pvp-server');
}

export default function Realesta14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-pvp-server" />;
}
