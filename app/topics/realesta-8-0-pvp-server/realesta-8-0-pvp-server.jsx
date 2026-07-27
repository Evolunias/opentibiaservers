import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-pvp-server');
}

export default function Realesta80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-pvp-server" />;
}
