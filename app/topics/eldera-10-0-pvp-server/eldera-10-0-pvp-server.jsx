import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-pvp-server');
}

export default function Eldera100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-pvp-server" />;
}
