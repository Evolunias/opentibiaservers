import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-pvp-server');
}

export default function Eldera74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-pvp-server" />;
}
