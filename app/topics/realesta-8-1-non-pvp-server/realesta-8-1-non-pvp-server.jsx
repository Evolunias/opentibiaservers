import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-non-pvp-server');
}

export default function Realesta81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-non-pvp-server" />;
}
