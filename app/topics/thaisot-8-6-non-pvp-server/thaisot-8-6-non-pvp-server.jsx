import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-non-pvp-server');
}

export default function Thaisot86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-non-pvp-server" />;
}
