import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-non-pvp-server');
}

export default function Thaisot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-non-pvp-server" />;
}
