import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-non-pvp-server');
}

export default function Midhem15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-non-pvp-server" />;
}
