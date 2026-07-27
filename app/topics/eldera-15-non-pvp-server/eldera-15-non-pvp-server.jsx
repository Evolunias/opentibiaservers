import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-non-pvp-server');
}

export default function Eldera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-non-pvp-server" />;
}
