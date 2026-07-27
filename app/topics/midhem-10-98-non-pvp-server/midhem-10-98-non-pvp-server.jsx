import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-non-pvp-server');
}

export default function Midhem1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-non-pvp-server" />;
}
