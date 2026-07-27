import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-non-pvp-server');
}

export default function Eldera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-non-pvp-server" />;
}
