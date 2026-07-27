import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-pvp-server');
}

export default function Evolera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-pvp-server" />;
}
