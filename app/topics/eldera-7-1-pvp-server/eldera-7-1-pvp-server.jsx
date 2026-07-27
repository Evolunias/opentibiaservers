import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-pvp-server');
}

export default function Eldera71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-pvp-server" />;
}
