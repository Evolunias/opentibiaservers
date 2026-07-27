import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-pvp-server');
}

export default function Midhem14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-pvp-server" />;
}
