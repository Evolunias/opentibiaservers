import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-non-pvp-server');
}

export default function Eldera76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-non-pvp-server" />;
}
