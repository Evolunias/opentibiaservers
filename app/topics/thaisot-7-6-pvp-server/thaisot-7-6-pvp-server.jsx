import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-pvp-server');
}

export default function Thaisot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-pvp-server" />;
}
