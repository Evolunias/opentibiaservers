import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-non-pvp-server');
}

export default function Midhem76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-non-pvp-server" />;
}
