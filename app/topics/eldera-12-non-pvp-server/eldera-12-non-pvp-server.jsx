import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-non-pvp-server');
}

export default function Eldera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-non-pvp-server" />;
}
