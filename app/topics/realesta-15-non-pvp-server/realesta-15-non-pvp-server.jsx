import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-non-pvp-server');
}

export default function Realesta15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-non-pvp-server" />;
}
