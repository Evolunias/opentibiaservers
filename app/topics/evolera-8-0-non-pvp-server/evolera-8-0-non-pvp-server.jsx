import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-non-pvp-server');
}

export default function Evolera80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-non-pvp-server" />;
}
