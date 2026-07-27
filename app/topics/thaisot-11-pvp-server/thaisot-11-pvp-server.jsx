import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-pvp-server');
}

export default function Thaisot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-pvp-server" />;
}
