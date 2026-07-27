import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-non-pvp-server');
}

export default function Oxygenot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-non-pvp-server" />;
}
