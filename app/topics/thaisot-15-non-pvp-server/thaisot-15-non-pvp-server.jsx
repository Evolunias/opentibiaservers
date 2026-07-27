import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-non-pvp-server');
}

export default function Thaisot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-non-pvp-server" />;
}
