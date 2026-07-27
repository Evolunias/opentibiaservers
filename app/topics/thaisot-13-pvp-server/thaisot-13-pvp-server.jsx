import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-pvp-server');
}

export default function Thaisot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-pvp-server" />;
}
