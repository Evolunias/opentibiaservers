import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-non-pvp-server');
}

export default function Midhem12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-non-pvp-server" />;
}
