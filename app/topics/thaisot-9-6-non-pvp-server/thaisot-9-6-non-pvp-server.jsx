import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-non-pvp-server');
}

export default function Thaisot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-non-pvp-server" />;
}
