import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-pvp-server');
}

export default function Midhem96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-pvp-server" />;
}
