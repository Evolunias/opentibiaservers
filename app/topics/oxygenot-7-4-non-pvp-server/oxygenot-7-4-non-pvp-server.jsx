import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-non-pvp-server');
}

export default function Oxygenot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-non-pvp-server" />;
}
