import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-pvp-server');
}

export default function Realesta84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-pvp-server" />;
}
