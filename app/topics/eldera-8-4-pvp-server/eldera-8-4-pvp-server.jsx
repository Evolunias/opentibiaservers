import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-pvp-server');
}

export default function Eldera84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-pvp-server" />;
}
