import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-non-pvp-server');
}

export default function Midhem96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-non-pvp-server" />;
}
