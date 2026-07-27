import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-pvp-server');
}

export default function Eldera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-pvp-server" />;
}
