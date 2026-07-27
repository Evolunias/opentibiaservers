import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-pvp-server');
}

export default function Thaisot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-pvp-server" />;
}
