import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-non-pvp-server');
}

export default function Realesta96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-non-pvp-server" />;
}
