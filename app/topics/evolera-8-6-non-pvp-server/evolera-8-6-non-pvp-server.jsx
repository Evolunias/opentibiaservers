import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-non-pvp-server');
}

export default function Evolera86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-non-pvp-server" />;
}
