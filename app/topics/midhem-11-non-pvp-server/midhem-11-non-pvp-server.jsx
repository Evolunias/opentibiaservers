import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-non-pvp-server');
}

export default function Midhem11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-non-pvp-server" />;
}
