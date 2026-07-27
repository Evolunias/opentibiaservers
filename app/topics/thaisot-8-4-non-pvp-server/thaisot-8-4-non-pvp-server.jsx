import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-non-pvp-server');
}

export default function Thaisot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-non-pvp-server" />;
}
