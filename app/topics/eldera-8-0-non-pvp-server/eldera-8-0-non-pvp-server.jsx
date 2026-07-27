import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-non-pvp-server');
}

export default function Eldera80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-non-pvp-server" />;
}
