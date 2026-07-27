import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-pvp-server');
}

export default function Thaisot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-pvp-server" />;
}
