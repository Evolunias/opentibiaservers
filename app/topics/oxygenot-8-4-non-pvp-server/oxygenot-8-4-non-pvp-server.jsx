import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-non-pvp-server');
}

export default function Oxygenot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-non-pvp-server" />;
}
