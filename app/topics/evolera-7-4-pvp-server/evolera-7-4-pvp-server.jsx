import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-pvp-server');
}

export default function Evolera74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-pvp-server" />;
}
