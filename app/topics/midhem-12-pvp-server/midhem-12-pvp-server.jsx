import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-pvp-server');
}

export default function Midhem12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-pvp-server" />;
}
