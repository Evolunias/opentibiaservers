import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-non-pvp-server');
}

export default function Realesta772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-non-pvp-server" />;
}
