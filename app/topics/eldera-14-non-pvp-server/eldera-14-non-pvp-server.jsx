import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-non-pvp-server');
}

export default function Eldera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-non-pvp-server" />;
}
