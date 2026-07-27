import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-54-non-pvp-server');
}

export default function Thaisot854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-54-non-pvp-server" />;
}
