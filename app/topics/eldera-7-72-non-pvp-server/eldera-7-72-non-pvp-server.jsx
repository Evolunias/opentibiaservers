import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-non-pvp-server');
}

export default function Eldera772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-non-pvp-server" />;
}
