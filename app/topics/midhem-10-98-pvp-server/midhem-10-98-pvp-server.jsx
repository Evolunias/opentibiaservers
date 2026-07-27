import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-pvp-server');
}

export default function Midhem1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-pvp-server" />;
}
