import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-pvp-server');
}

export default function Midhem13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-pvp-server" />;
}
