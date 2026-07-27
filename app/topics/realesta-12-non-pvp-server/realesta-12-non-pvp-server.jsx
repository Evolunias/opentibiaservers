import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-non-pvp-server');
}

export default function Realesta12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-non-pvp-server" />;
}
