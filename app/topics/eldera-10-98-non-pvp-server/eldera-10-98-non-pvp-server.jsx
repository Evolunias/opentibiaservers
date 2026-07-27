import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-non-pvp-server');
}

export default function Eldera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-non-pvp-server" />;
}
