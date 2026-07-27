import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-non-pvp-server');
}

export default function Evolera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-non-pvp-server" />;
}
