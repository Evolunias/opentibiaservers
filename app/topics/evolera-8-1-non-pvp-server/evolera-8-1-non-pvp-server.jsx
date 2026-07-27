import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-non-pvp-server');
}

export default function Evolera81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-non-pvp-server" />;
}
