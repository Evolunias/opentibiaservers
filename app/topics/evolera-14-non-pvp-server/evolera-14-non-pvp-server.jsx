import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-non-pvp-server');
}

export default function Evolera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-non-pvp-server" />;
}
