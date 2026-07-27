import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-non-pvp-server');
}

export default function Thaisot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-non-pvp-server" />;
}
