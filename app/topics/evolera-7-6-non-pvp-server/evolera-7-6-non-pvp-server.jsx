import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-non-pvp-server');
}

export default function Evolera76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-non-pvp-server" />;
}
