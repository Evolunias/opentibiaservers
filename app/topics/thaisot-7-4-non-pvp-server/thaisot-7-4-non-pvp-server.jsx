import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-non-pvp-server');
}

export default function Thaisot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-non-pvp-server" />;
}
