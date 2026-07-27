import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-pvp-server');
}

export default function Midhem86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-pvp-server" />;
}
