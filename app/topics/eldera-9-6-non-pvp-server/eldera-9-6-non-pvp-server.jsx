import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-non-pvp-server');
}

export default function Eldera96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-non-pvp-server" />;
}
