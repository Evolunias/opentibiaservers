import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-pvp-server');
}

export default function Eldera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-pvp-server" />;
}
