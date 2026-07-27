import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-pvp-server');
}

export default function Thaisot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-pvp-server" />;
}
