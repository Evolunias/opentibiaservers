import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-pvp-server');
}

export default function Midhem15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-pvp-server" />;
}
