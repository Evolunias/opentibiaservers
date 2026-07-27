import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-pvp-server');
}

export default function Eldera772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-pvp-server" />;
}
