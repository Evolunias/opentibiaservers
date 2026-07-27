import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-non-pvp-server');
}

export default function Realesta14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-non-pvp-server" />;
}
