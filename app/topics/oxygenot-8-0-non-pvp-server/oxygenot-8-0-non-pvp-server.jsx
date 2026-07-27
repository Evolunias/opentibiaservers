import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-non-pvp-server');
}

export default function Oxygenot80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-non-pvp-server" />;
}
