import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-non-pvp-server');
}

export default function Evolera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-non-pvp-server" />;
}
