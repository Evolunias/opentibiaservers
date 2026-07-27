import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-non-pvp-server');
}

export default function Midhem772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-non-pvp-server" />;
}
