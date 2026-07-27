import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-pvp-server');
}

export default function Midhem84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-pvp-server" />;
}
