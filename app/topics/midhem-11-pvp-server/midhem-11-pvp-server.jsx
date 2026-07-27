import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-pvp-server');
}

export default function Midhem11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-pvp-server" />;
}
