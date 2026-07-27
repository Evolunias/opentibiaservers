import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-non-pvp-server');
}

export default function Realesta1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-non-pvp-server" />;
}
