import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-pvp-server');
}

export default function Eldera11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-pvp-server" />;
}
