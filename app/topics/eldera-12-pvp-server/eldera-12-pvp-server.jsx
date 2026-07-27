import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-pvp-server');
}

export default function Eldera12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-pvp-server" />;
}
